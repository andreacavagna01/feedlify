export default function Page({ params }: { params: { item: string } }) {
    return <div>My Item: {params.item}</div>
  }