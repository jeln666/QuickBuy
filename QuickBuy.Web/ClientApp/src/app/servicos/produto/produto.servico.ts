import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../modelo/produto";

@Injectable({
  providedIn: "root"
})
export class ProdutoServico implements OnInit {

  private baseUrl: string;
  private produtos: Produto[];

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  ngOnInit(): void {
    this.produtos = [];
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl + "api/produto/cadastrar", JSON.stringify(produto), { headers: this.headers });
  }

  public salvar(produto: Produto): Observable<Produto> {

    return this.http.post<Produto>(this.baseUrl + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers });
  }

  public deletar(produto: Produto): Observable<Produto> {

    return this.http.post<Produto>(this.baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
  }

  public obterTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "api/produto");
  }


  public obterProduto(produtoId: number): Observable<Produto> {
    return this.http.get<Produto>(this.baseUrl + "api/produto/" + produtoId);
  }
}
