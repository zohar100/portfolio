import { useState, useEffect } from 'react';
import axios from '../axios';

export function useProjects() {
    const [projects, setProjects] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        axios.get('projects/').then(response => {
            if(response.data.length) {
                setProjects(response.data);
                setStatus('success');
            }else {
                setStatus('error');
            }
        })
    }, [])

    return [projects, status];
}