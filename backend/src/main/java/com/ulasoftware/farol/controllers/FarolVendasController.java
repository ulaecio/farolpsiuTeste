package com.ulasoftware.farol.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ulasoftware.farol.dto.FarolVendasDTO;
import com.ulasoftware.farol.service.FarolVendasService;

	@RestController
	@RequestMapping(value = "/vendas")
	public class FarolVendasController {
		
		@Autowired
		private FarolVendasService service;
		
		/*
		 * @GetMapping public ResponseEntity<List<FarolVendasDTO>> findAll(){
		 * List<FarolVendasDTO> list = service.findAll(); return
		 * ResponseEntity.ok(list); }
		 */
		
		// BUSCA POR PAGINAÇÃO A SER IMPLEMENTADA
		
		  @GetMapping public ResponseEntity<Page<FarolVendasDTO>> findAll(Pageable
		  pageable){ Page<FarolVendasDTO> list = service.findAll(pageable); return
		  ResponseEntity.ok(list); }
		  
		  @GetMapping (value = "/{id}")
		  public ResponseEntity<FarolVendasDTO> findById(@PathVariable Long id){ 
			  FarolVendasDTO dto = service.findById(id);
			  return ResponseEntity.ok().body(dto);
			  }
		  
		  @GetMapping (value = "/rota")
		  public ResponseEntity<FarolVendasDTO> findByRota(@PathVariable Integer rota){ 
			  FarolVendasDTO dto = service.findByRota(rota);
			  return ResponseEntity.ok().body(dto);
			  }
		 

}
