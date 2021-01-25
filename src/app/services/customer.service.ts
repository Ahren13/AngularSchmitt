import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

const baseUrl = 'http://localhost:8080/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByName(name) {
    return this.http.get(`${baseUrl}?name=${name}`);
  }

  createCustomersDetail(id, data){
    return this.http.post(`${baseUrl}/${id}/customersDetail`,data)
  }

  getCustomerDetail(id){
    return this.http.get(`${baseUrl}/${id}/customersDetail/list`);
  }

  getSingleCustomerDetail(cdid){
    return this.http.get(`${baseUrl}/customersDetail/${cdid}`)
  }
  
}
