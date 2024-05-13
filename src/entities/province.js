class Province{
    id;
    name;
    full_name;
    latitud;
    longitud;
    display_order;
}

constructor(id, name, full_name, latitud, longitud, display_order)
{
    this.id = id;
    this.name = name;
    this.full_name = full_name;
    this.latitud = latitud;
    this.longitud = longitud;
    this.display_order = display_order;
}

constructor(name, full_name, latitud, longitud, display_order)
{
    this.name = name;
    this.full_name = full_name;
    this.latitud = latitud;
    this.longitud = longitud;
    this.display_order = display_order;
}

export default Province;