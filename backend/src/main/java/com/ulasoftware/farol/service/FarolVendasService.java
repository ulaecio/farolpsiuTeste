package com.ulasoftware.farol.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ulasoftware.farol.dto.FarolVendasDTO;
import com.ulasoftware.farol.entities.FarolVendas;
import com.ulasoftware.farol.repositories.FarolVendasRepository;

@Service
public class FarolVendasService {
	
	@Autowired
	private FarolVendasRepository repository;
	
	/*
	 * //BUSCA SEM PAGINAÇÃO public List<FarolVendasDTO> findAll() {
	 * List<FarolVendas> result = repository.findAll(); return result.stream().map(x
	 * -> new FarolVendasDTO(x)).collect(Collectors.toList());
	 * 
	 * }
	 */
		//	BUSCA POR PAGINAÇÃO A SER IMPLEMENTADA
		
		  public Page<FarolVendasDTO> findAll(Pageable pageable) { Page<FarolVendas>
		  result = repository.findAll(pageable); return result.map(x -> new
		  FarolVendasDTO(x));
		  
		  }
		 

}
