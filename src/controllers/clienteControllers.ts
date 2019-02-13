import { Request, Response } from  'express';
import pool from '../database';

class ClientesConstroller{
    //Metodo para listar los clientes
    public  async listClientes( req: Request, res: Response){
        const clientes = await  pool.query('select * from clientes;');
        res.json(clientes);
    }
    //Metodo para ver un cliente
    public  async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const client = await pool.query('SELECT * FROM clientes WHERE id = ?',[id]);
        if(client.length > 0){
            return res.json(client[0]);
        }
        res.status(404).json({text: 'No se encuentra el registros solicitado'});
    }
    //Metodo para crear un cliente
    public async create(req: Request, res: Response): Promise <void>{
        await pool.query('INSERT INTO clientes set ?', [req.body]);
       res.json({message: 'Cliente Registrado correctamente'});
   }

   public async update(req: Request, res: Response):Promise <void>{
    const {id} = req.params;
    await pool.query('UPDATE clientes set ? WHERE id = ?',[req.body,id]);
    res.json({message: 'Cliente Actualizado Correctamente'});
   }
 
}

const clienteController = new ClientesConstroller();
export default clienteController;