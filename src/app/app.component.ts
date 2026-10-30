import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
 selector: 'ba-root', standalone: true, imports: [CommonModule, FormsModule],
 templateUrl: './app.component.html'
})
export class AppComponent {
 lang: 'en'|'ar' = 'en'; theme = 'dark'; booking = false; sent = false; menu = false;
 services = [
  ['Interior Architecture','Thoughtful spatial planning and architectural detailing.','الهندسة المعمارية الداخلية','تخطيط مدروس للمساحات وتفاصيل معمارية راقية.'],
  ['Interior Design','Distinctive concepts, refined layouts and a cohesive visual language.','التصميم الداخلي','أفكار تصميم مميزة وتوزيعات راقية وهوية بصرية متناسقة.'],
  ['Luxury Fit-Out','Carefully coordinated execution and finishing.','التجهيز والتشطيب الفاخر','تنفيذ وتشطيبات منسقة بعناية واهتمام بالجودة.'],
  ['Custom Furniture','Made-to-measure furniture and bespoke pieces.','الأثاث المصمم حسب الطلب','أثاث وقطع مصممة خصيصاً لتناسب مساحتك.'],
  ['Material Selection','A considered palette of textures, finishes and lighting.','اختيار الخامات','اختيارات مدروسة من الأنسجة والتشطيبات والإضاءة.'],
  ['Consultation','Professional guidance for your project direction.','الاستشارات','إرشاد متخصص لتحديد رؤية مشروعك واتجاهه.']
 ];
 toggleLang(){this.lang=this.lang==='en'?'ar':'en';document.documentElement.lang=this.lang;document.documentElement.dir=this.lang==='ar'?'rtl':'ltr';}
 scroll(id:string){this.menu=false;document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}
 open(){this.booking=true;this.sent=false;}
 submit(f:any){if(f.valid)this.sent=true;}
}