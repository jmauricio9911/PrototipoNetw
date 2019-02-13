import { Router } from 'express';
import clienteController from '../controllers/clienteControllers';
import consultorController from '../controllers/consultorController';


class ConsultorRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Rutas Para Clientes
        this.router.get('/clientes/',clienteController.listClientes);
        this.router.get('/cliente/:id',clienteController.getOne);
        this.router.post('/cliente',clienteController.create);
        this.router.put('/cliente/:id',clienteController.update);
        //Rutas Para Consultores
        this.router.get('/consultores/',consultorController.list);
        this.router.get('/consultor/:id',consultorController.getOne);
        this.router.post('/consultor',consultorController.create);
        
        
    }
}

const consultorRoutes = new ConsultorRoutes();
export default consultorRoutes.router;