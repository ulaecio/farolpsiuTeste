package com.ulasoftware.farol.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ulasoftware.farol.entities.FarolVendas;

public interface FarolVendasRepository extends JpaRepository<FarolVendas, Long>{
	Optional<FarolVendas> findByRota(Integer rota);

}
