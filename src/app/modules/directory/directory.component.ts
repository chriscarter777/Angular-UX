import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Customer, CustomerPanel} from '../../interfaces'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit {
    customers: Customer[];
    panels: CustomerPanel[];

    constructor(private http: Http) { }

    ngOnInit() {
        this.GetCustomers().subscribe((custmrs) => {
            this.customers = custmrs;
            this.panels = this.MakePanels(custmrs);
        })
    }

    GetCustomers(): Observable<Customer[]>{
        return this.http.get('../../mocks/customer-directory.json')
            .map((customers) => {
                return customers.json();
            })
    } 

    MakePanels(custmrs: Customer[]): CustomerPanel[]{
        var pnls: CustomerPanel[] = [];
        custmrs.forEach( (c) => pnls.push({"customer": c, "expanded": false}) );
        return pnls;
    } 

    onExpand(idx:number){
        this.panels[idx].expanded = true;
    }

    onContract(idx:number){
        this.panels[idx].expanded = false;
    }
}
