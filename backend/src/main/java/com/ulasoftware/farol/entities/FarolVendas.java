package com.ulasoftware.farol.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "farol_vendas")
public class FarolVendas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Integer empresa;
	private String setor;
	private Integer rota;
	private Double vlr_venda;
	private Integer qtde_venda;
	private String produto;
	private String familia;
	private LocalDate data_vendas;
	
	public FarolVendas() {
		
	}

	public FarolVendas(Long id, Integer empresa, String setor, Integer rota, Double vlr_venda, Integer qtde_venda,
			String produto, String familia, LocalDate data_vendas) {
		this.id = id;
		this.empresa = empresa;
		this.setor = setor;
		this.rota = rota;
		this.vlr_venda = vlr_venda;
		this.qtde_venda = qtde_venda;
		this.produto = produto;
		this.familia = familia;
		this.data_vendas = data_vendas;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Integer empresa) {
		this.empresa = empresa;
	}

	public String getSetor() {
		return setor;
	}

	public void setSetor(String setor) {
		this.setor = setor;
	}

	public Integer getRota() {
		return rota;
	}

	public void setRota(Integer rota) {
		this.rota = rota;
	}

	public Double getVlr_vendas() {
		return vlr_venda;
	}

	public void setVlr_vendas(Double vlr_vendas) {
		this.vlr_venda = vlr_vendas;
	}

	public Integer getQtde_venda() {
		return qtde_venda;
	}

	public void setQtde_venda(Integer qtde_venda) {
		this.qtde_venda = qtde_venda;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public String getFamilia() {
		return familia;
	}

	public void setFamilia(String familia) {
		this.familia = familia;
	}

	public LocalDate getData_vendas() {
		return data_vendas;
	}

	public void setData_vendas(LocalDate data_vendas) {
		this.data_vendas = data_vendas;
	}
}
