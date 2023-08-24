import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
export let BootstrapProcess1=()=>
{
    return(
        <>
        <ol >
            COLORS
            <li className='text-primary'> <i class="bi bi-1-circle"></i>Primary</li>
            <li className='text-secondary'>Secondary</li>
            <li className='text-info'>Info</li>
            <li className='text-success'>Success</li>
            <li className='text-dark'>Dark</li>
            <li className='text-light bg-dark'>Light</li>
            <li className='text-danger'>Danger</li>
            <li className='text-warning'>Warning</li>
        </ol>
        </>
    );
}