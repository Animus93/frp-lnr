import { Component } from '@angular/core';
import { Ipartners } from 'src/app/interfaces/partners.inteerface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  links: Ipartners[] = [
    {
      name: 'Росреестр',
      link: 'https://rosreestr.gov.ru/activity/vnesenie-svedeniy-v-gosudarstvennyy-reestr-samoreguliruemykh-organizatsiy-operatorov-elektronnykh-pl/vnesenie-svedeniy-v-reestry-samoreguliruemykh-organizatsiy/vnesenie-svedeniy-v-svodnyy-reestr-chlenov-samoreguliruemykh-organizatsiy-otsenshchikov/svedeniya-iz-svodnogo-reestra-chlenov-samoreguliruemykh-organizatsiy-otsenshchikov/',
      icon: 'assets/icons/partners/rosreestr.svg',
    },
    {
      name: 'Фонд развития промышленности',
      link: 'https://frprf.ru/?х',
      icon: 'assets/icons/partners/FRP.png',
    },
    {
      name: 'Министрество промышленной торговли ЛНР',
      link: 'https://mpt.lpr-reg.ru/',
      icon: 'assets/icons/partners/mpt lnr.png',
    },
    {
      name: 'Министрество промышленной торговли',
      link: 'https://minpromtorg.gov.ru/',
      icon: 'assets/icons/partners/mpt.svg',
    },
    {
      name: 'Правительство России',
      link: 'http://government.ru/',
      icon: 'assets/icons/partners/GOV-RF.svg',
    },
    {
      name: 'Правительство ЛНР',
      link: 'https://sovminlnr.ru/',
      icon: 'assets/icons/partners/gov lnr.png',
    },
    {
      name: 'Глава Луганской Народной Рреспублики',
      link: 'https://главалнр.рф/',
      icon: 'assets/icons/partners/glava lnr.svg',
    },

  ]
}
