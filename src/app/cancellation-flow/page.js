import { redirect } from 'next/navigation';

export default function CancellationRootPage() {
    redirect('/cancellation-flow/select-order');
}                   