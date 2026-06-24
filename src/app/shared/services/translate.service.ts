import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn : 'root'});
export class translateService{
    private translations : any={};
    private currentLang = 'vi';

    constructor(private http:HttpClient){}

    loadTranslations(lang : string){
        return this.http.get(`assets/i18n/${lang}.json`).subscribe((data:any) => {
            this.translations = data;
        })
    }
    translate(key:string){
        return this.translations[key] || key;
    }

    getCurrentLanguage(){
        return this.currentLang;
    }
}