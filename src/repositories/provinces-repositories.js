import DBConfig from '../configs/dbConfig.js';
import pkg from 'pg';
const {Client, Pool} = pkg;

export default class ProvinceRepository
{
    getAllAsync = async () =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = 'SELECT * FROM provinces';
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }

    getByIdAsync = async (id) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `SELECT * FROM provinces where id = ${id}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Insert into Province(name, full_name, latitud, longitud, display_order) Values (${entity.name}, ${entity.full_name}, ${entity.latitud}, ${entity.longitud}, ${entity.display_order})`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Update provinces Set name=${entity.name}, full_name=${entity.full_name}, latitud=${entity.latitud}, longitud=${entity.longitud}, display_order=${entity.display_order} Where id = ${entity.id}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Delete * FROM provinces where id = ${id}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }
}