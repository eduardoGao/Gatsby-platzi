import React from 'react'
import { Link } from "gatsby";

import { SEO } from "../components"
import { Button, Purchase } from "../styles/components";

export default function gracias() {
    return (
        <div>
            <SEO title="Gracias" />
            <Purchase>
                <h1>Gracias</h1>
                <p>Tu compra ha sido exitosa</p>
                <span rol='img' aria-label='emoji'>💚</span>
                <Link to="/">
                    <Button>Vuelve a la tienda</Button>
                </Link>
            </Purchase>
        </div>
    )
}
