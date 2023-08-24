const Horarios = (props) => {
  return (
    <main className="Horarios">
      <div className="HorariosCont">

        <div className="horariosMeditacion">
          <h2>
            <p>Profesorado Meditacion   </p>
          </h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Año</th>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Teaoria y Practica</td>
                <td></td>
                <td>Filosofia</td>
                <td></td>
                <td>Practica I</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td></td>
                <td>Teoria y practica II</td>
                <td>Psicologia</td>
                <td>Practica II</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td></td>
                <td>Teoria y practica III</td>
                <td>Bakti Sutras</td>
                <td></td>
                <td>Practica III</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="horariosProfesoradoYoga">
          <h2>
            <p> Profesorado Yoga</p>
          </h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Año</th>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td>Yoga y Salud</td>
                <td>Filosofia</td>
                <td></td>
                <td>Practica I</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Dictado de clase I</td>
                <td></td>
                <td></td>
                <td>Anatomia I</td>
                <td>Psicologia</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td></td>
                <td>Yoga Sutras</td>
                <td>Anatomia II</td>
                <td></td>
                <td>Dictado de clase II</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="horariosFilosofia">
          <h2>
            <p>Escuela de  Meditacion   </p>
          </h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Año</th>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td>Filosofia</td>
                <td></td>
                <td>Practica I</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
                <td>Psicologia</td>
                <td>Practica II</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td></td>
                <td></td>
                <td>Bakti Sutras</td>
                <td></td>
                <td>Practica III</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="horariosMeditacionGuiada">
          <h2>
            <p>Meditaciones guiadas   </p>
          </h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">19:00</th>
                <td>18:30</td>
                <td></td>
                <td>19:30</td>
                <td>10:00</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="horariosYoga">
          <h2>
            <p>Yoga Externos</p>
          </h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">18:00</th>
                <td>10:30</td>
                <td>19.30</td>
                <td>19:00</td>
                <td>10:00</td>

              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </main>
  );
}

export default Horarios;