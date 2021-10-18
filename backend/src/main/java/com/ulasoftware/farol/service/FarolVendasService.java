package com.ulasoftware.farol.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
		  
			@Transactional(readOnly = true)
			public FarolVendasDTO findById(Long id) {
				Optional<FarolVendas> obj = repository.findById(id);
				FarolVendas entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity id not found"));
				return new FarolVendasDTO(entity);
			}
			
			@Transactional(readOnly = true)
			public FarolVendasDTO findByRota(Integer rota) {
				Optional<FarolVendas> obj = repository.findByRota(rota);
				FarolVendas entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity rota not found"));
				return new FarolVendasDTO(entity);
			}

}
