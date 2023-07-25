const Materias = (props) => {
   return(
      <main className="Materias">

     <div className="MateriasCont">

        <div className="materiasMeditacion">
            <h2>
                <p>Profesorado Meditacion   </p>
            </h2>
            <h5>
                <p>Primer Año:   Teaoria y Practica		Filosofia		Practica I </p>
            </h5>
            <h5>
                <p>Segundo Año: Teoria y practica II	Psicologia	Practica II	 </p>
            </h5>   
            <h5> 
                <p>Tercer Año: Teoria y practica III	Bakti Sutra 	Practica III </p>
            </h5>  	

        </div> 

        <div className="materiasYoga">
            <h2>
                <p> Profesorado Yoga</p>
            </h2>
            <h5>
                <p>Primer Año: Yoga y Salud Filosofia	Practica I </p>
            </h5>
            <h5>
                <p>Segundo Año:	Dictado de clase I	Anatomia I	Psicologia </p>
            </h5>   
            <h5> 
                <p>Tercer Año: Yoga Sutras	Anatomia II	Dictado de clase II </p>
            </h5> 
        </div> 
   

        <div className="materiasFilosofia">
            <h2>
                <p>Escuela de  Meditacion   </p>
            </h2>
            <h5>
                <p>Primer Año: Filosofia		Practica I </p>
            </h5>
            <h5>
                <p>Segundo Año:	Psicologia	Practica II	 </p>
            </h5>   
            <h5> 
                <p>Tercer Año: Bakti Sutras		Practica III </p>
            </h5> 
                 
        </div> 

</div>

    </main>
   );
}

export default Materias;