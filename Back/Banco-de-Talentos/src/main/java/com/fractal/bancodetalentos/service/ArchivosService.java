package com.fractal.bancodetalentos.service;

import com.fractal.bancodetalentos.model.request.Documento;

import java.util.Map;

public interface ArchivosService {

    Map<String, String> addNewFile(Documento documento, Integer id);
}
