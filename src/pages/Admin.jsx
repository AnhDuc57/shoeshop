import Announcement from '../components/Announcement';
import NavbarAdmin from '../components/NavbarAdmin';
import styled from 'styled-components';
import Products from '../components/Products';
import { useContext, useEffect } from 'react';
import { DataContext } from '../App';
// import '../components/bootstrap.min.css';
import { Button, colors } from '@material-ui/core';
import { useState } from 'react';
import { useRef } from 'react';
import { Update } from '@material-ui/icons';

const Container = styled.div``;

const ADD = 0;
const UPDATE = 1;
const DELETE = 2;

const Admin = () => {
    const [data, setData] = useState([]);
    const closeModelRef = useRef();
    useEffect(() => {
        fetch('http://localhost:3001/products', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            },
        })
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error));
    }, data);

    const [action, setAction] = useState(ADD);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(undefined);

    const addProduct = () => {
        const data = new FormData();
        data.append('image', image);
        data.append('title', name);
        data.append('description', description);
        data.append('price', price);
        size.split(',').forEach((s, i) => {
            data.append(`sizes[${i}]`, s.trim());
        });
        color.split(',').forEach((c, i) => {
            data.append(`colors[${i}]`, c.trim());
        });
        console.log(data);
        fetch('http://localhost:3001/products', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            },
            method: 'POST',
            body: data,
        })
            .then((res) => res.json())
            .then((json) => {
                setData((prev) => [...prev, json]);
                alert('Add successfully');
                closeModelRef.current.click();
            })
            .catch((error) => console.log(error));
    };

    const delProduct = (id) => {
        const confirm = window.confirm('Are you sure to delete this product ?');
        if (confirm) {
            fetch(`http://localhost:3001/products/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                },
            })
                .then((res) => res.json())
                .then((json) => {
                    setData((prev) => prev.filter((p) => p._id !== id));
                    alert('Deleted successfully');
                })
                .catch((error) => console.log(error));
        }
    };
    const updateProduct = () => {
        const data = new FormData();

        data.append('_id', id);
        data.append('image', image);
        data.append('title', name);
        data.append('description', description);
        data.append('price', price);

        size.split(',').forEach((s, i) => {
            data.append(`sizes[${i}]`, s.trim());
        });
        color.split(',').forEach((c, i) => {
            data.append(`colors[${i}]`, c.trim());
        });
        console.log(size);
        fetch('http://localhost:3001/products', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            },
            body: data,
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData((prev) =>
                    prev.map((p) => {
                        if (p._id == id) {
                            return json;
                        }
                        return p;
                    }),
                );
                alert('Update successfully');
                closeModelRef.current.click();
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container>
            <NavbarAdmin />

            <div className="d-flex flex-column">
                <button
                    onClick={() => {
                        setName('');
                        setPrice(0);
                        setColor('');
                        setSize('');
                        setDescription('');
                        setAction(ADD);
                    }}
                    className="btn btn-success  m-5 "
                    style={{ width: '80px', alignSelf: 'flex-end' }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    ADD
                </button>

                <table className="table table-hover  text-center">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {data.map((product, index) => (
                            <tr key={index + product._id}>
                                <td>{product._id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.colors.join(', ')}</td>
                                <td>{product.sizes.join(', ')}</td>
                                <td>{product.description}</td>
                                <td className="w-25">
                                    <img
                                        src={product.image}
                                        className="img img-fluid w-25 h-25"
                                        alt="Responsive image"
                                    ></img>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            delProduct(product._id);
                                        }}
                                        className="btn btn-danger m-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => {
                                            setName(product.title);
                                            setPrice(product.price);
                                            setColor(product.colors.join(', '));
                                            setSize(product.sizes.join(', '));
                                            setDescription(product.description);
                                            setAction(UPDATE);
                                            setId(product._id);
                                        }}
                                        className="btn btn-primary m-2"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>

            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                {action == ADD ? 'ADD PRODUCTS' : 'UPDATE PRODUCTS'}
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                className="form-control mt-2"
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                className="form-control mt-2"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <input
                                type="text"
                                value={color + ''}
                                onChange={(e) => setColor(e.target.value)}
                                placeholder="Color (Ex: white,red,green)"
                                className="form-control mt-2"
                            />
                            <input
                                type="text"
                                value={size + ''}
                                onChange={(e) => setSize(e.target.value)}
                                placeholder="Size (Ex: 40,41,42)"
                                className="form-control mt-2"
                            />
                            <textarea
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                                className="form-control mt-2"
                            />
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                                placeholder="picture"
                                className="form-control mt-2"
                            />
                        </div>
                        <div class="modal-footer">
                            <button ref={closeModelRef} type="button" class="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    if (action == ADD) {
                                        addProduct();
                                    } else if (action == UPDATE) {
                                        updateProduct();
                                    }
                                }}
                                type="button"
                                class="btn btn-primary"
                            >
                                {action == ADD ? 'SAVE' : 'UPDATE'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default Admin;
