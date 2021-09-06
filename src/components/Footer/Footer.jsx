import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-cont">
            <div className="flex-1 just-center ">
                <div className="flex-1 just-center">
                    <h2>ET ACCESORIOS</h2>
                </div>
                <div className="flex-1 flex-column just-center">
                    <h2>QUIENES SOMOS</h2>
                    <p>Tu smartphone hace mucho por ti, consiéntelo y regálale algún accesorio de los que tenemos en venta: fundas, soportes, protectores, limpiadores, tecnología OTG y más, conoce todos los accesorios que potenciarán sus funciones. </p>
                    
                </div>
            </div>
            <div className="flex-1 just-center ">
                <div className="flex-1 flex-column just-center">
                    <h2>Este sitio web utiliza cookies</h2>
                    <p>Usamos cookies para analizar el tráfico del sitio web y optimizar tu experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos se agruparán con los datos de todos los demás usuarios.</p>
                    
                </div>
                <div className="flex-1 flex-column just-center">
                    <h2>REDES SOCIALES</h2>
                    <p>Facebook</p>
                    <p>WhatsApp</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
        </footer>
    )
}
