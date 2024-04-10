package com.fractal.bancodetalentos.controller;

import com.fractal.bancodetalentos.exception.ResourceNotFoundException;
import com.fractal.bancodetalentos.model.request.AddHabTechReq;
import com.fractal.bancodetalentos.model.response.TecSkillsResp;
import com.fractal.bancodetalentos.service.HabilidadTecnicaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/bdt/tech")
@RequiredArgsConstructor
public class HabilidadTecnicaController {

    private final HabilidadTecnicaService tecnicaService;

    @PostMapping("/skills")
    public ResponseEntity<List<TecSkillsResp>> findTecSkills() {
        List<TecSkillsResp> skills = tecnicaService.getTecSkillsResp();
        if (skills == null) {
            throw new ResourceNotFoundException("Technical Skills");
        }
        return new ResponseEntity<>(skills, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('RECLUTADOR')")
    @PostMapping("/add")
    public ResponseEntity<Map<String, String>> addNewTechSkill(@Valid @RequestBody AddHabTechReq tecnicas) {
        Map<String, String> resp = tecnicaService.addNewTechSkill(tecnicas, tecnicas.getId());
        return new ResponseEntity<>(resp, HttpStatus.CREATED);
    }

}
