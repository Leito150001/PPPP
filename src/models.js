const db = require('./database'); // Archivo de configuración de la conexión a la base de datos MySQL

class Paciente {
    constructor(paciente) {
        this.nombre = paciente.nombre;
        this.apellidos = paciente.apellidos;
        this.nombre_de_la_madre = paciente.nombre_de_la_madre;
        this.carnet_identidad_madre = paciente.carnet_identidad_madre;
        this.direccion = paciente.direccion;
        this.telefono = paciente.telefono;
        this.municipio = paciente.municipio;
        this.provincia = paciente.provincia;
        this.diagnostico_ingreso = paciente.diagnostico_ingreso;
        this.diagnostico_egreso = paciente.diagnostico_egreso;
        this.alta = paciente.alta;
        this.riesgo = paciente.riesgo;
        this.genetico = paciente.genetico;
        this.precoz = paciente.precoz;
        this.numero_control = paciente.numero_control;
        this.diag_prenatal = paciente.diag_prenatal;
        this.hoja_conf = paciente.hoja_conf;
        this.accion_inmediatas = paciente.accion_inmediatas;
        this.cronograma_seg = paciente.cronograma_seg;
        this.info_maternidad = paciente.info_maternidad;
        this.coordinacion_equipo = paciente.coordinacion_equipo;
        this.criterio_cirujano = paciente.criterio_cirujano;
        this.presencia_en_salon = paciente.presencia_en_salon;
        this.actuacion_afeccion = paciente.actuacion_afeccion;
        this.ginecologo_asig = paciente.ginecologo_asig;
        this.coordinacion_traslado1 = paciente.coordinacion_traslado1;
        this.coincidencia_diag = paciente.coincidencia_diag;
        this.coordinacion_traslado2 = paciente.coordinacion_traslado2;
        this.justific_traslado = paciente.justific_traslado;
        this.evaluacion_trasl = paciente.evaluacion_trasl;
        this.deficiencias_trasl = paciente.deficiencias_trasl;
        this.interconsult_cirujano = paciente.interconsult_cirujano;
        this.interconsult_medica = paciente.interconsult_medica;
        this.estudios_inter_quirurgica = paciente.estudios_inter_quirurgica;
        this.doc_contrarref = paciente.doc_contrarref;
        this.programa_acciones = paciente.programa_acciones;
        this.cronograma_atencion = paciente.cronograma_atencion;
        this.confir_segunda_opinion = paciente.confir_segunda_opinion;
        this.verificar_equipo_quirurgico = paciente.verificar_equipo_quirurgico;
        this.verificar_equipo_anestesico = paciente.verificar_equipo_anestesico;
        this.clasificacion = paciente.clasificacion;
        this.fecha = paciente.fecha;
        this.updated_at = paciente.updated_at;
        this.evaluacion_atencion_primaria = paciente.evaluacion_atencion_primaria;
        this.evaluacion_regreso_neonato_operado = paciente.evaluacion_regreso_neonato_operado;
        this.evaluacion_hogar_materno = paciente.evaluacion_hogar_materno;
        this.evaluacion_servicio_neonatologia_provinciales = paciente.evaluacion_servicio_neonatologia_provinciales;
        this.evaluacion_servicio_neonatologia_cerecine = paciente.evaluacion_servicio_neonatologia_cerecine;
        this.evaluacion_atencion_medica = paciente.evaluacion_atencion_medica;
        this.evaluacion_equipo_quirurgico = paciente.evaluacion_equipo_quirurgico;
    }

    static getAll(result) {
        db.query("SELECT * FROM pacientes", (err, res) => {
            if (err) {
                console.error("Error al obtener pacientes: ", err);
                result(null, err);
                return;
            }

            console.log("Pacientes: ", res);
            result(null, res);
        });
    }

    // Implementa los métodos para otras operaciones CRUD (create, update, delete) según tus necesidades
}

module.exports = Paciente;