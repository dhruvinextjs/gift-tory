import { redirect } from 'next/navigation';

export default function CancellationRootPage() {
    redirect('/return-flow/select-order');
}                   