import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  title: string = 'Стики TEREA ВСЕГО от 3500 ₽'
  discrtiption: string = 'Стики производства Кз , Армении, Индонезии и Европы Всего от 3500 ₽'

  aboutParagraph1: string = 'Добро пожаловать в наш магазин, ваш источник стиков Terea для IQOS! У нас вы найдете разнообразие продукции, включая популярные стики Terea и устройства, такие как iqos Iluma и iluma prime. Мы гордимся предлагаемым ассортиментом, который доступен не только в Москве, но и по всей России.'
  aboutParagraph2: string = 'Благодаря удобной доставке вы можете наслаждаться вашими любимыми стиками Terea в кратчайшие сроки. Не упустите шанс заказать качественные стики Terea прямо сейчас и получить удовольствие от вашего IQOS уже сегодня!'

  info: string = 'У нас в наличии широкий выбор вкусов стиков Terea для IQOS! От классических вариантов до уникальных иллюминирующих ароматов - найдите идеальный вкус для вашего IQOS уже сегодня!'
  subInfo: string = 'Наша доставка самая быстрая по Москве , отправляем заказы личным курьером или по желанию клиента Яндекс доставкой или СДЭК`ом и конечно у нас есть самовывоз , все можно получить и оплатить на месте'

  baseUrl: string = '../../../assets'
  assort: any = [
    {
      id: 1,
      name: 'IQOS Iluma standart',
      discrtiption: 'самая консервативная модель в линейке. Она сохранила тот же дизайн, что и у IQOS DUO, зато начинка и функционал – такие же как у Iqos Iluma Prime',
      img: `${this.baseUrl}/1.jpg`,
    },
    {
      id: 2,
      name: 'IQOS Iluma Prime',
      discrtiption: 'Преимущества IQOS Iluma Prime по сравнению с другими моделями IQOS больше не будет неприятной проблемы, когда лезвие плохо входит в стик, так как лезвия отсутствует.',
      img: `${this.baseUrl}/2.jpg`,
    },
    {
      id: 3,
      name: 'IQOS ILUMA ONE',
      discrtiption: 'уникальная система нагрева табака, которая удивит вас своей простотой и функциональностью. ',
      img: `${this.baseUrl}/3.jpg`,
    },
  ]
}
