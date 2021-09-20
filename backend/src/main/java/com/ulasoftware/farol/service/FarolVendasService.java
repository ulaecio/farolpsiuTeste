package com.ulasoftware.farol.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ulasoftware.farol.dto.FarolVendasDTO;
import com.ulasoftware.farol.entities.FarolVendas;
import com.ulasoftware.farol.repositories.FarolVendasRepository;

@Service
public class FarolVendasService {
	
	@Autowired
	private FarolVendasRepository repository;
	
	public List<FarolVendasDTO> findAll() {
		List<FarolVendas> result = repository.findAll();
		return result.stream().map(x -> new FarolVendasDTO(x)).collect(Collectors.toList());
		
	}


}
