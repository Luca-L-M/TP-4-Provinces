import {Router} from 'express';
import ProvinceServices from './../services/province-services.js'
const router = Router();
const svc = new ProvinceServices();

router.get('', async (req, res) =>{
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null)
    {
        respuesta = res.status(200).json(returnArray);
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

router.get('/:id', async (req, res) =>{
    let respuesta;
    let id = req.params.id;
    const returnArray = await svc.getByIdAsync(id);
    if (returnArray != null)
    {
        respuesta = res.status(200).json(returnArray);
    }
    else respuesta = res.status(404).send('No se encontro ningun resultado')
    return respuesta;
});

router.post('', async (req, res) =>{
    let respuesta;
    const returnArray = await svc.createAsync();
    if (returnArray != null)
    {
        respuesta = res.status(200).json(returnArray);
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

router.put('', async (req, res) =>{
    let respuesta;
    const returnArray = await svc.updateAsync();
    if (returnArray != null)
    {
        respuesta = res.status(200).json(returnArray);
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

router.delete('/:id', async (req, res) =>{
    let respuesta;
    let id = req.params.id;
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        respuesta = res.status(200).json(returnArray);
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

export default router;