import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddinvestersComponent } from '../../shared/addinvesters/addinvesters.component';
import { AddsettingExportComponent } from '../../shared/addsetting-export/addsetting-export.component';
import { AddsettingImportComponent } from '../../shared/addsetting-import/addsetting-import.component';
import { AddsettingAddlanguageComponent } from '../../shared/addsetting-addlanguage/addsetting-addlanguage.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  constructor(private _dig :MatDialog){}

    add_export(){
      this._dig.open(AddsettingExportComponent)
    }
    add_import(){
      this._dig.open(AddsettingImportComponent)
    }
    add_addlanguage(){
      this._dig.open(AddsettingAddlanguageComponent)
    }
}
