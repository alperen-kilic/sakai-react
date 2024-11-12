import { Image } from 'primereact/image';
import React from 'react';
import './styles.css';

type Props = {};

const page = (props: Props) => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="grid">
                        <div className="col-2">
                            <Image src="https://api.multiavatar.com/avatar.png" alt="Personel Resmi" width="85%" />
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
                </div>
            </div>
        </div>
    );
};

export default page;
