package com.fractal.BancodeTalentos.model.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "BT_TX_LISTA_USUARIO_TALENTO")
@Getter
@Setter
@Data
@NoArgsConstructor
public class btTxListaUsuarioTalento {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_BT_ID_LISTA_USUARIO_DETALLE")
    @SequenceGenerator(name = "SEQ_BT_ID_LISTA_USUARIO_DETALLE", sequenceName = "SEQ_BT_ID_LISTA_USUARIO_DETALLE", allocationSize = 1)
    @Column(name = "ID_LISTA_USUARIO_DETALLE")
    private int idListaUsuarioDetalle;

    @Column(name = "ID_LISTA_USUARIO")
    private int idListaUsuario;

    @Column(name = "ID_TALENTO")
    private int idTalento;

}
