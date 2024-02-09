package com.fractal.BancodeTalentos.model.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "BT_TD_FEEDBACK_TALENTO")
@Getter
@Setter
@Data
@NoArgsConstructor
public class btTdFeedbackTalento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_FEEDBACK")
    private int idFeedback;

    @Column(name = "ID_TALENTO")
    private int idTalento;

    @Column(name = "NU_ESTRELLAS")
    private int nuEstrellas;

    @Column(name = "DE_DESCRIPCION")
    private String deDescripcion;

}
