import {Response, Request} from 'express';
import pool from '../database';

class ConsultorController{
    //Listar todos los consultores
    public async list(req: Request, res: Response){
        const consultores = await pool.query('SELECT * FROM consultores;');
        res.json(consultores);
    }
    //Listar un consultor
    public  async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const consutor = await pool.query('SELECT * FROM consultores WHERE id = ?',[id]);
        if(consutor.length > 0){
            return res.json(consutor[0]);
        }
        res.status(404).json({text: 'No se encuentra el registros solicitado'});
    }

    public async create(req: Request, res: Response): Promise <void>{
        await pool.query('INSERT INTO consultores set ?', [req.body]);
       res.json({message: 'Consultor Registrado correctamente'});
   }


}


const consultorController = new ConsultorController();
export default consultorController;