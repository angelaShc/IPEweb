import { Injectable, signal } from "@angular/core";
import { Secciones } from "../models/tema";

@Injectable({
  providedIn: 'root'
})
export class Contenido {

  // Estado: lista de temas
  readonly temas = signal<Secciones[]>(this.seed());
    // Estado: titulo del tema seleccionado
    readonly selectedTitulo = signal<string>(
    this.temas()[0]?.titulo ?? ''
    );
    // Tema seleccionado (derivada)
    get selected(): Secciones | null {
     const titulo = this.selectedTitulo();
     return this.temas().find(t => t.titulo === titulo) ?? null;
    }
    selectTema(titulo: string) {
    this.selectedTitulo.set(titulo);
    }
    updateSelected(patch: Partial<Secciones>) {
    const current = this.selected;
    if (!current) return;
    const updated: Secciones = {
        ...current,
        ...patch
    };
    this.temas.update(list =>
        list.map(t =>
        t.titulo === current.titulo ? updated : t
        )
    );
    }
    // Datos iniciales
    private seed(): Secciones[] {
    const colores = ['#fffff7', '#fbf8d1', '#fff5b1', '#fff47c', '#ffe14d'];
    return [
        {   
        titulo: '1 - UF6',
        descripcion: 'Fondos de financiación',
        material: ['Como necesitamos una cantidad determinada de dinero para crear nuestra empresa, es necesario tener el plan de financiación donde se especificarán las fuentes de las que se van a obtener fondos necesarios para hacer realidad la idea de negocio: ', 
            '- Business angels son inversores privados que apuestan por proyectos empresariales innovadores y con alto potencial de crecimiento. ',
            '- Venture Builders son empresas que crean y desarrollan startups desde cero, aportando recursos, experiencia y una red de contactos. ',
            '- Crowdlending es una forma de financiación colectiva en la que un gran número de personas aportan pequeñas cantidades de dinero para financiar un proyecto o una empresa. ',
            'Estas son algunas de las fuentes de financiación más comunes para startups aunque existen también muchas otras opciones disponibles dependiendo del tipo de negocio y sus necesidades específicas.',
            'Hay que tener cuidado de que existe una diferencia entre financiar activos y financiar la operación. Los Venture Builders y Business Angels suelen inyectar capital para inversiones de alto riesgo y crecimiento (desarrollo tecnológico, expansión), mientras que el Crowdlending se utiliza frecuentemente para cubrir gastos operativos (tesorería, capital de trabajo) debido a su naturaleza de deuda. ',
            'Existe también el concepto de bartering, que implica el intercambio de bienes o servicios sin utilizar dinero. Esto puede ser útil para startups que buscan reducir costos iniciales al intercambiar recursos con otras empresas o individuos. La financiación externa (Venture Builders, Angels, Crowdlending) impulsa la inversión a largo plazo, mientras que el bartering actúa como una estrategia operativa de ahorro de costes, reduciendo la necesidad de efectivo en gastos corrientes. '
        ]
        },
        {
        titulo: '2 - UF7',
        descripcion: 'Rentabilidad del negocio',
        material: ['El Punto Muerto es el nivel de ventas en el que los ingresos totales igualan a los costos totales, resultando en cero ganancias o pérdidas. ',
            'En el sector digital, los activos físicos son mínimos, por lo que el análisis se centra en otros puntos:',
            '- Balance de Situación: activos intangibles como propiedad intelectual, software y datos de clientes son cruciales. ',
            '- Cuenta de Resultados: los costos variables pueden ser bajos, pero los costos fijos como desarrollo y marketing son significativos.',
            'Estas empresas suelen "quemar" caja rápidamente para ganar cuota de mercado (Blitzscaling):',
            '- Liquidez (el "ahora"): es la capacidad de pagar las facturas de la próxima semana (nóminas, servidores, marketing) y es vital mantener suficiente efectivo para operaciones diarias y crecimiento.',
            '- Solvencia (el "futuro"): es la capacidad de cubrir todas las obligaciones a largo plazo (deudas, inversiones) y es esencial para la estabilidad financiera a largo plazo.',
            'En resumen, en las empresas digitales, el Punto Muerto se analiza considerando activos intangibles y costos fijos significativos, con un enfoque en la gestión de liquidez y solvencia para asegurar operaciones diarias y estabilidad financiera a largo plazo.'
        ],
        url: './plantilla-punto-muerto.xlsx'
        },
        {
        titulo: '3 - UF8',
        descripcion: 'Autónomo (IRPF) o Sociedad Limitada (Impuesto de Sociedades)',
        material: ['En España, las empresas pueden constituirse como autónomo (IRPF) o como Sociedad Limitada (Impuesto de Sociedades).',
            '- Autónomo: es una persona física que ejerce una actividad económica por cuenta propia. Se rige por el Impuesto sobre la Renta de las Personas Físicas (IRPF).',
            '- Sociedad Limitada: es una empresa con un capital social dividido en acciones. Se rige por el Impuesto de Sociedades.',
            'Cada opción tiene ventajas y desventajas en términos de responsabilidad, impuestos, y gestión. La elección dependerá del tipo de actividad, volumen de negocio, y objetivos personales del emprendedor.',
            'La sociedad limitada ofrece protección de responsabilidad limitada, lo que significa que los socios no son personalmente responsables de las deudas de la empresa más allá de su aportación al capital social. Esto puede ser una ventaja significativa en términos de protección personal.',
            'Por otro lado, los autónomos tienen una estructura más simple y menos costos administrativos, pero asumen toda la responsabilidad personal por las deudas y obligaciones de su negocio.',
            'La sociedad limitada Nueva Empresa (SLNE) es una variante de la sociedad limitada diseñada para facilitar la creación de nuevas empresas. Ofrece un proceso de constitución más rápido y sencillo, con menos requisitos administrativos y un capital social mínimo más bajo.',
            '- SL: tipos fijos (IS) y protección de bienes personales.',
            '- SLNE: similar a SL pero con un único socio, ideal para lanzamientos rápidos en el sector digital. ',
            'Proteger tus activos personales es crucial, una responsabilidad patrimonial, especialmente en sectores de alto riesgo como el digital. La SL y SLNE ofrecen esta protección, mientras que ser autónomo implica un riesgo personal mayor. '
        ]
        },
        {
        titulo: '4 - UF9',
        descripcion: 'Alta en el Censo y Gestión Administrativa',
        material: ['El estar de alta en el Censo es el "DNI" de tu actividad ante Hacienda. Es obligatorio para cualquier actividad económica en España. ',
            '- El modelo 036 (Ordinario): es el que deben usar las Sociedades (SL) o autónomos que vayan a realizar ventas intracomunitarias (en la UE) o tengan actividades complejas. ',
            'Para dar de alta en el Censo (modelo 036) la actividad económica que se va a desarrollar necesitará: ',
            '- Elegir la forma jurídica adecuada (autónomo, sociedad limitada, etc.) según las necesidades y características del negocio. ',
            '- Obtener el NIF (Número de Identificación Fiscal) para la empresa. ',
            '- Inscribirse en el Régimen Especial de Trabajadores Autónomos (RETA) o en la Seguridad Social para sociedades. ',
            '- Registrar la marca o nombre comercial si es necesario. ',
            '- Obtener las licencias y permisos necesarios para operar legalmente. ',
            '- Abrir una cuenta bancaria a nombre de la empresa. ',
            '- Llevar una contabilidad adecuada y cumplir con las obligaciones fiscales y laborales. ',
            '- Presentar declaraciones fiscales periódicas (IVA, IRPF, Impuesto de Sociedades). ',
            '- Cumplir con las normativas laborales y de seguridad social si se tienen empleados. ',
            '- Mantenerse actualizado sobre cambios en la legislación que puedan afectar al negocio. ',
            'Estos son algunos de los pasos básicos para dar de alta una actividad económica en España, pero pueden variar según el tipo de negocio y su ubicación. Es recomendable consultar con un asesor legal o fiscal para asegurarse de cumplir con todos los requisitos específicos.',
            'Para la gestión documental y firma electrónica, la eficiencia depende de la automatización: ',
            '- Factura Digital: debe contener los mismos datos que la de papel pero firmada digitalmente. Facilita el cobro rápido y el orden contable. ',
            '- Firma Electrónica: obligatoria para cualquier trámite con la Administración. Permite firmar documentos digitalmente con validez legal. ',
            '- Flujo: un proceso automatizado para gestionar documentos desde su creación hasta su archivo, incluyendo aprobaciones y firmas electrónicas. ',
            'Implementar estas herramientas digitales mejora la eficiencia operativa, reduce errores y acelera los procesos administrativos en la empresa.',
            'Los trámites de Ayuntamientos y Seguridad Social también requieren firma electrónica para validar documentos y solicitudes, agilizando la interacción con estas entidades públicas.',
            'Ayuntamiento (licencias): si trabajas desde casa en servicios digitales, normalmente no necesitas Licencia de Apertura física, pero sí podrías necesitar una de "actividad inocua" si tienes oficina propia. ',
            'Seguridad social: para autónomos, se hace en el RETA simultáneamente al alta en Hacienda y para equipos remotos,  scontratas a alguien en otra provincia, el trámite es igual (cuenta de cotización). Si es en otro país, la complejidad aumenta: podrías necesitar que el empleado sea autónomo en su país o usar una empresa "Employer of Record" (EOR).'
        ]
        }
    ].map((tema, index) => ({
    ...tema,
    color: colores[index % colores.length]
    }));
    }
}