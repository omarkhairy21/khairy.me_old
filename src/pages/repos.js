import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const Repos = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Here My Repos</h1>
                <section className="content-body">
                     <Link to="/repos">return home</Link>
                </section>
            </article>
        </div>
    </Layout>
)

export default Repos
