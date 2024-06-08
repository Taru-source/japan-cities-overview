export default async function GoogleMapLink({
  params,
}: {
  params: { prefName: string; cityName: string };
}) {
  return (
    <a
      href={`https://www.google.com/maps?q=${params.prefName}${params.cityName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Google Map
    </a>
  );
}
