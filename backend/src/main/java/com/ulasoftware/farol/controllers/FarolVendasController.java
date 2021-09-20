package com.ulasoftware.farol.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ulasoftware.farol.dto.FarolVendasDTO;
import com.ulasoftware.farol.service.FarolVendasService;

	@RestController
	@RequestMapping(value = "/vendas")
	public class FarolVendasController {
		
		@Autowired
		private FarolVendasService service;
		
		@GetMapping
		public ResponseEntity<List<FarolVendasDTO>> findAll(){
			List<FarolVendasDTO> list = service.findAll();
			return ResponseEntity.ok(list);
		}

}
