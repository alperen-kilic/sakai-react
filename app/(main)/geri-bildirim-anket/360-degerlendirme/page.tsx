'use client';
import { CustomerService } from '../../../../demo/service/CustomerService';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import React, { useEffect, useState } from 'react';
import type { Demo } from '@/types';
import Link from 'next/link';

const TableDemo = () => {
    const [customers1, setCustomers1] = useState<Demo.Customer[]>([]);
    const [filters1, setFilters1] = useState<DataTableFilterMeta>({});
    const [loading1, setLoading1] = useState(true);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');

    const clearFilter1 = () => {
        initFilters1();
    };

    const onGlobalFilterChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters1 = { ...filters1 };
        (_filters1['global'] as any).value = value;

        setFilters1(_filters1);
        setGlobalFilterValue1(value);
    };

    const renderHeader1 = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Temizle" outlined onClick={clearFilter1} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Ara" />
                </span>
            </div>
        );
    };

    useEffect(() => {
        CustomerService.getCustomerSmall().then((data) => {
            setCustomers1(getCustomers(data));
            setLoading1(false);
        });

        initFilters1();
    }, []);

    const getCustomers = (data: Demo.Customer[]) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };

    const initFilters1 = () => {
        setFilters1({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: {
                value: null,
                matchMode: FilterMatchMode.STARTS_WITH
            },
            department: { value: null, matchMode: FilterMatchMode.IN },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            isRated: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue1('');
    };

    const nameBodyTemplate = (rowData: Demo.Customer) => {
        const name = rowData.name;
        return (
            <React.Fragment>
                <img
                    alt={name}
                    src={`https://api.multiavatar.com/${name}.png`}
                    onError={(e) => ((e.target as HTMLImageElement).src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    width={32}
                    style={{ verticalAlign: 'middle' }}
                />
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }}>{name}</span>
            </React.Fragment>
        );
    };

    const departmentBodyTemplate = (rowData: Demo.Customer) => {
        const department = rowData.department;
        return (
            <React.Fragment>
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }}>{department}</span>
            </React.Fragment>
        );
    };

    const departmentFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <>
                <div className="mb-3 text-bold">Müdürlük Seçici</div>
                <MultiSelect
                    value={options.value}
                    options={['Bilgi İşlem Müdürlüğü', 'Kültür İşleri Müdürlüğü']}
                    itemTemplate={departmentItemTemplate}
                    onChange={(e) => options.filterCallback(e.value)}
                    placeholder="Tüm Müdürlükler"
                    className="p-column-filter"
                />
            </>
        );
    };

    const departmentItemTemplate = (option: any) => {
        return (
            <div className="p-multiselect-representative-option">
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }}>{option}</span>
            </div>
        );
    };

    const isRatedBodyTemplate = (rowData: Demo.Customer) => {
        return rowData.isRated ? (
            <i className="pi text-green-500 pi-check-circle"></i>
        ) : (
            <Link href={'360-degerlendirme/degerlendir'}>
                <Button>Değerlendir</Button>
            </Link>
        );
    };

    const isRatedFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterCallback(e.value)} />;
    };

    const header1 = renderHeader1();

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>360 Değerlendirme</h5>
                    <DataTable
                        value={customers1}
                        paginator
                        className="p-datatable-gridlines"
                        showGridlines
                        rows={10}
                        dataKey="id"
                        filters={filters1}
                        filterDisplay="menu"
                        loading={loading1}
                        responsiveLayout="scroll"
                        emptyMessage="No customers found."
                        header={header1}
                    >
                        <Column field="name" body={nameBodyTemplate} header="İsim" filter filterPlaceholder="İsimle ara" style={{ minWidth: '12rem' }} />
                        <Column
                            header="Müdürlük"
                            body={departmentBodyTemplate}
                            filterField="department"
                            showFilterMatchModes={false}
                            filterMenuStyle={{ width: '16rem' }}
                            style={{ minWidth: '14rem' }}
                            filter
                            filterElement={departmentFilterTemplate}
                        />
                        <Column field="sub_department" header="Birim" style={{ minWidth: '12rem' }} />
                        <Column field="isRated" header="Değerlendirme Durumu" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={isRatedBodyTemplate} filter filterElement={isRatedFilterTemplate} />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default TableDemo;
