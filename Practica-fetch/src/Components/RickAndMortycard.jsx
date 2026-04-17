const RickAndMorty = ({ character }) => {
    return (
      <article
        tabIndex={0}
        className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/40 bg-white/65"
      >
        <div className="flex h-72 items-center justify-center rounded-b-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,248,216,0.95),rgba(237,243,255,0.78)_75%)]">
          <img
            className="h-full w-full rounded-2xl object-contain transition-all duration-300"
            src={character.image}
            alt={character.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src =
                "https://via.placeholder.com/420x420?text=Imagen+no+disponible";
            }}
          />
        </div>
  
        <div className="space-y-3 p-4 text-left">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-semibold leading-tight text-gray-900">
              {character.name}
            </h2>
  
            {/* antes era race → ahora usamos species */}
            <span className="rounded-full bg-amber-100/80 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur-sm transition-all duration-300 hover:bg-amber-200/90">
              {character.species}
            </span>
          </div>
  
          <p className="text-sm text-slate-600">
            {/* la API no trae description */}
            {character.type || "Sin descripción disponible."}
          </p>
  
          <div className="grid gap-2 text-sm text-slate-600">
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Species:</span>{" "}
              {character.species}
            </p>
  
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Status:</span>{" "}
              {character.status}
            </p>
  
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Gender:</span>{" "}
              {character.gender}
            </p>
  
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Origin:</span>{" "}
              {character.origin?.name}
            </p>
  
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Location:</span>{" "}
              {character.location?.name}
            </p>
          </div>
        </div>
      </article>
    );
  };
  
  export default RickAndMorty;