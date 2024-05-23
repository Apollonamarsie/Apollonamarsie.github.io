import Table from 'react-bootstrap/Table';

const Moons = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Planeta</th>
            <th>Największy księzyc</th>
            <th>Średnica [km]</th>
            <th>Temperatura [K]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Merkury</td>
            <td colSpan={3}>--Brak księżyca--</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Wenus</td>
            <td colSpan={3}>--Brak księżyca--</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ziemia</td>
            <td>Księżyc</td>
            <td>3475</td>
            <td>3476,2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mars</td>
            <td>Fobos</td>
            <td>22,2</td>
            <td>233</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Jowisz</td>
            <td>Ganimedes</td>
            <td>5268,2</td>
            <td>110</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Saturn</td>
            <td>Tytan</td>
            <td>5150</td>
            <td>93,7</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Uran</td>
            <td>Tytania</td>
            <td>1577,8</td>
            <td>60</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Neptun</td>
            <td>Tryton</td>
            <td>2706,8</td>
            <td>38</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Moons