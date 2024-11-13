'use client';
import { Image } from 'primereact/image';
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const questions = [
    {
        name: 'İşin sorumluluklarını yerine getirebilecek düzeyde mesleki bilgi ve becerisi vardır. Rolünün gerektirdiği sorumlulukların farkındadır ve daha iyisini yapmak için sürekli kendini, bilgi ve becerilerini geliştirir.',
        category: 'İşini Sahiplenme',
        rate: 3
    },
    {
        name: 'Şirket prosedürleri, kurum kültürü ve etik değerlerine uygun davranışlarda bulunur. Mesai saatlerine, iş devamlılığına, davet edildiği eğitimlere katılma.. vb. azami özen gösterir ve örnek duruş sergiler.',
        category: 'İşini Sahiplenme',
        rate: 4
    },
    {
        name: 'Tüm ilişkilerinde güler yüzlü ve pozitif enerji ile etkili ve etkin iletişim kurar.',
        category: 'İletişim',
        rate: 5
    },
    {
        name: 'Açık ve samimi iletişime önem verir, net ve kararlı duruşu ile karşı tarafı ikna eder ve yönlendirir.',
        category: 'İletişim',
        rate: 5
    },
    {
        name: 'Çalışma arkadaşlarını iyi dinler, beklentilerini anlar. Oluşabilecek problemler için empati kurarak çözüm yolları üretir.',
        category: 'İletişim',
        rate: 0
    },
    {
        name: 'Ortak hedef bilinci ile hareket ederek ekibi ile iş birliği içerisinde çalışır. Bireysel başarı kadar ekip ve şirket başarısınıda önemser.',
        category: 'Ekip Çalışması ve İşbirliği',
        rate: 0
    },
    {
        name: 'Fikirlerini açık ve dürüst bir şekilde ifade ederek, pozitif enerjisi ile çalışma arkadaşlarıyla doğru sonuçlara ulaşmada katkı sağlar.',
        category: 'Ekip Çalışması ve İşbirliği',
        rate: 0
    },
    {
        name: 'Bireysel ve kurum hedefleri doğrultusunda hızlı harekete geçerek, detayları takip eder ve uçtan uca işi sahiplenerek sonuca ulaştırır.',
        category: 'Sonuç Odaklılık',
        rate: 0
    },
    {
        name: 'Olumsuzluklar karşısında yılmaz, alternatif çözümler üretir, pozitif enerjisini de koruyarak temel amacı gerçekleştirir.',
        category: 'Sonuç Odaklılık',
        rate: 0
    }
];

type Props = {};

const page = (props: Props) => {
    const headerTemplate = (data: any) => {
        return (
            <React.Fragment>
                <span className="font-bold ml-2">{data.category}</span>
            </React.Fragment>
        );
    };

    const informationBodyTemplate = (rowData: any) => {
        return <InputText />;
    };
    const rateBodyTemplate = (rowData: any) => {
        return <Rating value={rowData.rate} onChange={(e) => (rowData.rate = e.value)} cancel={false} />;
    };

    return (
        <div className="grid">
            <div className="col-12">
                {/* <div className="card">
                    <div className="grid">
                        <div className="col-2">
                            <Image src="https://api.multiavatar.com/Alperen Kılıç.png" alt="Personel Resmi" width="85%" />
                        </div>
                        <div className="col-9">
                            <div className="grid">
                                <h4 className="col-12">Alperen Kılıç</h4>
                                <div className="col-3 flex" style={{ alignItems: 'center' }}>
                                    <i className="pi pi-building text-3xl mr-2"></i>
                                    <span>Bilgi İşlem Müdürlüğü</span>
                                </div>
                                <div className="col-3 flex" style={{ alignItems: 'center' }}>
                                    <i className="pi pi-building text-3xl mr-2"></i>
                                    <span>İletişim Bilgi Sistemleri Bürosu</span>
                                </div>
                                <div className="col-3 flex" style={{ alignItems: 'center' }}>
                                    <i className="pi pi-briefcase text-3xl mr-2"></i>
                                    <span>Yazılım Mühendisi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="card">
                    <div className="grid">
                        <DataTable value={questions} rowGroupMode="subheader" groupRowsBy="category" rowGroupHeaderTemplate={headerTemplate} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="name" header="Soru" style={{ minWidth: '200px' }}></Column>
                            <Column field="rate" body={rateBodyTemplate} header="Değerlendirme" style={{ width: '250px' }}></Column>
                            <Column field="information" body={informationBodyTemplate} header="Açıklama" style={{ width: '250px' }}></Column>
                        </DataTable>
                    </div>
                </div>
                <Button className="flex px-8 mb-5 mx-auto" label="Gönder" />
            </div>
        </div>
    );
};

export default page;
