import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { AgregarNovedadesComponent } from '../agregar-novedades/agregar-novedades.component';
import { NovedadesInterface } from '../interfaces/NovedadesInterface';
import { ModificarNovedadesComponent} from "../modificar-novedades/modificar-novedades.component";
import { Novedades} from "../Novedades";
<<<<<<< HEAD
import { ItemRopa } from '../clase/item-ropa'
=======
>>>>>>> parent of 9db92ba (n)

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  dataSource: any = [];
<<<<<<< HEAD
  displayedColumns: string[] = ['id','img', 'nombre', 'precio','cantidad','suma','opciones']
  data: ItemRopa[];
=======
  displayedColumns: string[] = ['id','marca', 'descripcion','anio','options']
  data: Novedades[];
>>>>>>> parent of 9db92ba (n)
  
  nuevoNovedades:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog) { 
    
<<<<<<< HEAD
    /*this.data = [{
=======
    this.data = [{
>>>>>>> parent of 9db92ba (n)
      id: '1',      
      marca: 'Nike',
      descripcion: 'Nike lanza los zapatos deportivos Mambacita Sweet 16 en homenaje a Gianna Bryant por su cumpleaños.',
      anio: 2022
<<<<<<< HEAD
    }
  ];*/
  this.data = [
    {id:1, nombre:"Gracias",precio:29.00, stock:13, srcimg:"../../assets/img/seccion-hombre/item_01.jpg", cantidad:13},
    {id:2, nombre:"Roopa",  precio:35.50, stock:22, srcimg:"../../assets/img/seccion-hombre/item_02.jpg", cantidad:22},
    {id:3, nombre:"Roopa",  precio:59.99, stock:145,srcimg:"../../assets/img/seccion-hombre/item_03.jpg", cantidad:145},
    {id:4, nombre:"Roopa",  precio:45.00, stock:48, srcimg:"../../assets/img/seccion-hombre/item_04.jpg", cantidad:48},
    {id:5, nombre:"Roopa",  precio:35.99, stock:74, srcimg:"../../assets/img/seccion-hombre/item_05.jpg", cantidad:74},
    {id:6, nombre:"Roopa",  precio:25.99, stock:62, srcimg:"../../assets/img/seccion-hombre/item_06.jpg", cantidad:62},
    {id:7, nombre:"Roopa",  precio:15.99, stock:50, srcimg:"../../assets/img/seccion-hombre/item_07.jpg", cantidad:50},
    {id:8, nombre:"Roopa",  precio:5.99,  stock:70, srcimg:"../../assets/img/seccion-hombre/item_08.jpg", cantidad:70},
    {id:9, nombre:"Roopa",  precio:0.99,  stock:28, srcimg:"../../assets/img/seccion-hombre/item_09.jpg", cantidad:28},
    {id:10,nombre:"Roopa",  precio:0.09,  stock:80, srcimg:"../../assets/img/seccion-hombre/item_10.jpg", cantidad:80}
  ];
    // this.nav = this.router.getCurrentNavigation();
    // this.nuevoNovedades = this.nav.extras.state;
  
    // if (this.nuevoNovedades != null)
    // {
    //   console.log(this.nuevoNovedades.datosNovedades.queryParams);
    //   switch (this.nuevoNovedades.datosNovedades.queryParams.tipo){
    //     case "agregar":
    //       this.data.push(this.nuevoNovedades.datosNovedades.queryParams);
    //       break;
    //     case "modificar":
    //       console.log("modificar");
    //       let nove = this.nuevoNovedades.datosNovedades.queryParams;
    //       let index = this.data.findIndex((c:Novedades)=>{
    //         return c.id == nove.id;
    //       });
    //       this.data[index] = {
    //         id: nove.id,
    //         marca: nove.marca,
    //         descripcion: nove.descripcion,
    //         anio: nove.anio
    //       };
    //       break;
    //   }
    // }
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ItemRopa>(this.data as ItemRopa[]);
=======
    },
    {
      id: '2',      
      marca: 'Adidas',
      descripcion: 'Kanye West denuncia a Adidas por plagiar sus Yeezy Slides.',
      anio: 2022
    },
    {
      id: '3',      
      marca: 'Adidas',
      descripcion: 'Adidas firma una colaboración a largo plazo con Mr. Bailey.',
      anio: 2022
    },
    {
      id: '4',      
      marca: 'Reebok',
      descripcion: 'ABG completa la compra de Reebok a Adidas por 2.100 millones de dólares.',
      anio: 2021
    },
    {
      id: '5',      
      marca: 'Puma',
      descripcion: 'Puma cierra ejercicio en récord histórico de facturación y rentabilidad.',
      anio: 2021
    },
    {
      id: '6',      
      marca: 'Puma',
      descripcion: 'Puma y Ferrari recogen el ADN de las carreras en su nuevo modelo de zapatillas ION Speed.',
      anio: 2021
    },
    {
      id: '7',      
      marca: 'Nike',
      descripcion: 'Nike respalda a Naomi Osaka tras retirarse del Abierto de Francia.',
      anio: 2021
    },
    {
      id: '8',      
      marca: 'Converse',
      descripcion: 'Converse y JW Anderson lanzan su nueva colección “Glitter”.',
      anio: 2021
    },
    {
      id: '9',      
      marca: 'The North Face',
      descripcion: 'Nueva Colección de ropa de escalada de The North Face.',
      anio: 2020
    },
    {
      id: '10',      
      marca: 'Reebok',
      descripcion: 'ABG firma la entrada de Reebok en China mientras aplaza su salida a bolsa.',
      anio: 2020
    },
    {
      id: '11',      
      marca: 'Adidas',
      descripcion: 'El organismo de control publicitario del Reino Unido prohíbe un anuncio de Adidas por mostrar "pechos desnudos".',
      anio: 2020
    },
    {
      id: '12',      
      marca: 'The North Face',
      descripcion: 'La gama Vectiv de The North Face en el País del Mont Blanc.',
      anio: 2020
    },
    {
      id: '13',      
      marca: 'Puma',
      descripcion: 'De la calle, a convertidas en abono: Puma diseña unas nuevas zapatillas biodegradables.',
      anio: 2020
    },
    {
      id: '14',      
      marca: 'Nike',
      descripcion: 'Nike está tratando de superar los problemas de la cadena de suministro.',
      anio: 2020
    },
    {
      id: '15',      
      marca: 'Puma',
      descripcion: 'Puma consigue un fuerte crecimiento en el segundo trimestre.',
      anio: 2019
    },
    {
      id: '16',      
      marca: 'Reebok',
      descripcion: 'Adidas vende Reebok y la venta podría alcanzar los mil millones de dólares.',
      anio: 2019
    },
    {
      id: '17',      
      marca: 'Reebok',
      descripcion: 'Victoria Beckham vuelve a colaborar con Reebok.',
      anio: 2019
    },
    {
      id: '18',      
      marca: 'Nike',
      descripcion: 'Zapatillas Nike AF1 diseñadas por Virgil Abloh en subasta por US$ 2.000.',
      anio: 2018
    }
  ];

    this.nav = this.router.getCurrentNavigation();
    this.nuevoNovedades = this.nav.extras.state;
  
    if (this.nuevoNovedades != null)
    {
      console.log(this.nuevoNovedades.datosNovedades.queryParams);
      switch (this.nuevoNovedades.datosNovedades.queryParams.tipo){
        case "agregar":
          this.data.push(this.nuevoNovedades.datosNovedades.queryParams);
          break;
        case "modificar":
          console.log("modificar");
          let nove = this.nuevoNovedades.datosNovedades.queryParams;
          let index = this.data.findIndex((c:Novedades)=>{
            return c.id == nove.id;
          });
          this.data[index] = {
            id: nove.id,
            marca: nove.marca,
            descripcion: nove.descripcion,
            anio: nove.anio
          };
          break;
      }
    }
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<NovedadesInterface>(this.data as NovedadesInterface[]);
>>>>>>> parent of 9db92ba (n)
    console.log(this.data);
  }

  openDialogAgregar(){
    // this.dialog.open(AgregarNovedadesComponent, {
    //   width: '50%',
    // })
  }

  openDialogModificar(nove:any){
    // console.log("openDialog");
    // this.dialog.open(ModificarNovedadesComponent, {
    //   data:{
    //     usuarioModificar: {
    //       id: nove.id,
    //       marca: nove.marca,
    //       descripcion: nove.descripcion,
    //       anio: nove.anio
    //     }
    //   },
    //   width: '50%',
    // })
  }

  buscarnovedades($event: any){
    this.dataSource.filter = $event.target.value;
    console.log("event");
  }
}
