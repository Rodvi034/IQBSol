import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  social: {
    linkedin: string;
  };
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    { name: 'Erkan Kavlak', role: 'CTO | Founding Partner', image: 'content/assets/img/team/ErkanKavlakProfil-e1584558673582.jpg', social: { linkedin: 'https://www.linkedin.com/in/erkankavlak/' } },
    { name: 'Abdulkadir Karaduman', role: 'CPO | Founding Partner', image: 'content/assets/img/team/AbdulkadirKaraduman6.jpg', social: { linkedin: 'https://www.linkedin.com/in/abdulkadirkaraduman/' } },
    { name: 'Samet Kalkan', role: 'Software Development Manager', image: 'content/assets/img/team/SametKalkanProfil.jpeg', social: { linkedin: 'https://www.linkedin.com/in/kalkansa/' } },
    { name: 'Abdullah Kölege', role: 'System & Integration Team Leader', image: 'content/assets/img/team/AbdullahKölegeProfil.jpeg', social: { linkedin: 'https://www.linkedin.com/in/kolege/' } },
    { name: 'Yunus Livaoğlu', role: 'Product Management Team Leader', image: 'content/assets/img/team/yunus-livaoğlu.jpg', social: { linkedin: 'https://www.linkedin.com/in/yunus-livao%C4%9Flu-162055114/' } },
    { name: 'Yaşar Okay', role: 'Software Development Team Leader', image: 'content/assets/img/team/yasarokay.jpg', social: { linkedin: 'https://www.linkedin.com/in/yasar-okay/' } },
    { name: 'Ali Can', role: 'Sr. Software Developer', image: 'content/assets/img/team/alican.jpg', social: { linkedin: 'https://www.linkedin.com/in/canalican/' } },
    { name: 'Mert Geren', role: 'Sr. Software Developer', image: 'content/assets/img/team/MertGeren5-2.jpg', social: { linkedin: 'https://www.linkedin.com/in/mertgeren/' } },
    { name: 'Can Sevimli', role: 'Sr. Software Analyst & Project Manager', image: 'content/assets/img/team/can-sevimli.jpg', social: { linkedin: 'https://www.linkedin.com/in/can-sevimli-66a876113/' } },
    { name: 'Fatma Kurşun', role: 'Sr. AI & Data Scientist', image: 'content/assets/img/team/fatma-kursun.jpg', social: { linkedin: 'https://www.linkedin.com/in/fatmakursun/' } },
    { name: 'Emre Çelik', role: 'Sr. Software Analyst & Project Manager', image: 'content/assets/img/team/emrecelik.jpg', social: { linkedin: 'https://www.linkedin.com/in/emrecelik15/' } },
    { name: 'İrfan Ulaş', role: 'Sr. Software Consultant - SAP - HR', image: 'content/assets/img/team/İrfanUlaş.jpg', social: { linkedin: 'https://www.linkedin.com/in/irfan-ula%C5%9F-830819172/' } },
    { name: 'Soner Yüksel', role: 'Sr. Software Consultant - SAP - RPA & SAC & BO', image: 'content/assets/img/team/SonerYuksel.jpg', social: { linkedin: 'https://www.linkedin.com/in/soner-yuksel-a9a99a27/' } },
    { name: 'Ömer Uzun', role: 'Sr. Software Consultant - SAP - Project & Support Mng.', image: 'content/assets/img/team/ÖmerUzun-1.jpg', social: { linkedin: 'https://www.linkedin.com/in/%C3%B6mer-uzun-5439795a/' } },
    { name: 'Hakan Cırık', role: 'Sr. Software Consultant - SAP - MM & PP', image: 'content/assets/img/team/HakanCırık2.jpg', social: { linkedin: 'https://www.linkedin.com/in/hakancirik/' } },
    { name: 'Ali Avcı', role: 'Sr. Software Consultant - SAP - BASIS', image: 'content/assets/img/team/AliAvcı.jpg', social: { linkedin: 'https://www.linkedin.com/in/ali-avci/' } },
    { name: 'Tuğba Eryılmaz', role: 'Sr. Software Consultant -SAP', image: 'content/assets/img/team/TugbaEryilmaz.png', social: { linkedin: 'https://www.linkedin.com/in/tugbaeryilmaz/' } },
    { name: 'Yaşar Murat Taşkale', role: 'Sr. Software Consultant - SAP', image: 'content/assets/img/team/YasarMuratTaskale.jpg', social: { linkedin: 'https://www.linkedin.com/in/ya%C5%9Far-murat-ta%C5%9Fkale-pmp%C2%AE-9448b141/' } },
    { name: 'İbrahim Arabacı', role: 'Sr. Software Analyst - Project Manager', image: 'content/assets/img/team/İbrahimArabacı.jpg', social: { linkedin: 'https://www.linkedin.com/in/ibrahim-arabac%C4%B1-5748586b/' } },
    { name: 'Erdoğan Garip', role: 'Sr. Software Analyst- SAP - FI & CA', image: 'content/assets/img/team/ErdoğanGarip-1.png', social: { linkedin: 'https://www.linkedin.com/in/erdo%C4%9Fan-g-041250b9/' } },
    { name: 'Belkıs Dinç', role: 'Sr. Software Consultant - SAP - BASIS', image: 'content/assets/img/team/Belkıs-Dinç.jpg', social: { linkedin: 'https://www.linkedin.com/company/iqb-solutions/posts/?feedView=all' } },
    { name: 'Caner Yavuz', role: 'Sr. Software Analyst - SAP - Project & Support Mng.', image: 'content/assets/img/team/caner-yavuz.jpg', social: { linkedin: 'https://www.linkedin.com/in/caner-yavuz-5757b687/' } },
    { name: 'Ferdi Örenli', role: 'Sr. Software Consultant - SAP - BASIS', image: 'content/assets/img/team/ferdi-örenli2.jpeg', social: { linkedin: 'https://www.linkedin.com/in/ferdi-%C3%B6-67927878/' } },
    { name: 'Elif Nur Ünal Bingöl', role: 'Sr. Software Analyst - SAP - HR', image: 'content/assets/img/team/ElifNurÜnal2.jpeg', social: { linkedin: 'https://www.linkedin.com/in/elifnurunal/' } },
    { name: 'Mehmet Berk Antep', role: 'Sr. Software Consultant - SAP - FI & TRM', image: 'content/assets/img/team/mehmet-berk-antep.jpg', social: { linkedin: 'https://www.linkedin.com/in/mehmet-berk-antep-483532b7/' } },
    { name: 'Gülgün Özer Sazara', role: 'Sr. Software Analyst - SAP - BW & BPC & SAC & BO', image: 'content/assets/img/team/gülgün-özer-sazara3.jpg', social: { linkedin: 'https://www.linkedin.com/in/g%C3%BClg%C3%BCn-%C3%B6zer-sazara/' } },
    { name: 'Mert Başkaya', role: 'Software Developer', image: 'content/assets/img/team/Mert-Baskaya3.png', social: { linkedin: 'https://www.linkedin.com/in/m-baskaya/' } },
    { name: 'Aykut Yıldız', role: 'Software Developer', image: 'content/assets/img/team/AykutYildiz6.png', social: { linkedin: 'https://www.linkedin.com/in/aykut-yildiz-891b20158/' } },
    { name: 'Zilan Bilgiç', role: 'Software Developer', image: 'content/assets/img/team/Zilan-Bilgiç.jpg', social: { linkedin: 'https://www.linkedin.com/company/iqb-solutions/posts/?feedView=all' } },
    { name: 'Aleyna Yılmaz', role: 'Software Analyst', image: 'content/assets/img/team/aleyna-yılmaz.jpg', social: { linkedin: 'https://www.linkedin.com/in/aleynaayilmaz/' } },
    { name: 'Yusuf Ensar Yavuz', role: 'Software Analyst', image: 'content/assets/img/team/yusufensar.png', social: { linkedin: 'https://www.linkedin.com/in/yusuf-ensar-yavuz/' } },
    { name: 'Mert Ali Uludağ', role: 'Software Analyst', image: 'content/assets/img/team/MertAli_v2.jpg', social: { linkedin: 'https://www.linkedin.com/in/mert-ali-uludag/' } },
    { name: 'Emre Yapıcı', role: 'Cyber Security Specialist', image: 'content/assets/img/team/Emre-Yapıcı.jpeg', social: { linkedin: 'https://www.linkedin.com/in/emreyapici/' } },
    { name: 'Fatmanur Biçer', role: 'Software Consultant- SAP - RPA & SAC & BO', image: 'content/assets/img/team/fatmanurbiçer.jpg', social: { linkedin: 'https://www.linkedin.com/in/fatmanur-bi%C3%A7er-56189b139/' } },
    { name: 'Muhammed Alperen Şimşek', role: 'Software Consultant - SAP - MM & PP', image: 'content/assets/img/team/muhammed-alperen.jpg', social: { linkedin: 'https://www.linkedin.com/company/iqb-solutions/posts/?feedView=all' } },
    { name: 'Rumeysa Erden Taşlı', role: 'Software Consultant - SAP - HR', image: 'content/assets/img/team/rumeysa-erden3.jpeg', social: { linkedin: 'https://www.linkedin.com/in/rumeysaerden/' } },
    { name: 'Enes Gündüz', role: 'Jr. Software Developer', image: 'content/assets/img/team/enesgündüz.png', social: { linkedin: 'https://www.linkedin.com/in/enes-g%C3%BCnd%C3%BCz-52aa371a1/' } },
    { name: 'Halil İbrahim Morgil', role: 'Jr. Software Developer', image: 'content/assets/img/team/halil-ibrahim.jpg', social: { linkedin: 'https://www.linkedin.com/in/ibrahimrgl/' } },
    { name: 'Alperen Akın', role: 'Jr. Software Developer', image: 'content/assets/img/team/alperen-akın.jpg', social: { linkedin: 'https://www.linkedin.com/in/alperen-ak%C4%B1n/' } },
    { name: 'Buket Çakır', role: 'Jr. Software Developer', image: 'content/assets/img/team/buket_cakir_2-1.jpg', social: { linkedin: 'https://www.linkedin.com/in/buketcakir/' } },
    { name: 'Tamer Kaplan', role: 'Jr. Software Analyst', image: 'content/assets/img/team/tamer-kaplan.jpg', social: { linkedin: 'https://www.linkedin.com/in/tamer-kaplan/' } },
    { name: 'Yusuf Furkan Şengül', role: 'Jr. Software Analyst', image: 'content/assets/img/team/yusuf-furkan.jpg', social: { linkedin: 'https://www.linkedin.com/in/yfurkansengul/' } },
    { name: 'Beyza Beyazıt', role: 'Jr. Software Analyst', image: 'content/assets/img/team/BeyzaBeyazit_v2.jpg', social: { linkedin: 'https://www.linkedin.com/in/beyza-beyaz%C4%B1t/' } },
    { name: 'Fatih Yılmaz', role: 'Jr. Software Developer', image: 'content/assets/img/team/fatih-yılmaz.jpg', social: { linkedin: 'https://www.linkedin.com/in/fatihyilmaz123/' } },
    { name: 'Beyza Nur Güzelel', role: 'Jr. Software Developer', image: 'content/assets/img/team/BeynaNur2.jpg', social: { linkedin: 'https://www.linkedin.com/in/beyza-g%C3%BCzelel/' } },
    { name: 'Alptekin Aktaş', role: 'Jr. Software Consultant- SAP - SAC & BO & BW', image: 'content/assets/img/team/Alptekin-Aktaş.jpg', social: { linkedin: 'https://www.linkedin.com/in/alptekin-akta%C5%9F-0b928715a/' } },
    { name: 'Seray Vatan', role: 'Jr. Software Analyst - SAP - MM & PP', image: 'content/assets/img/team/seray-vatan.jpg', social: { linkedin: 'https://www.linkedin.com/in/serayvatan/' } },
  ];
}
