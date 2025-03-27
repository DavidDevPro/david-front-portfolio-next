import { personalInfo } from "@/lib/data/common/aboutInfos";


export const AboutInfos = () => {
  return (
    <div className="bg-secondary/90 py-6 px-6 sm:p-8 md:p-10 rounded-2xl border shadow-gray-600/50 border-gray-700 shadow-md">
      <h3 className="font-montserrat text-xl text-center lg:text-left sm:text-2xl md:text-3xl font-semibold mb-12 text-accent">
        Informations personnelles
      </h3>

      {/* Informations personnelles sous forme de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-3">
        {personalInfo.map((info, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-accent to-secondary py-2 rounded-xl shadow-xl overflow-hidden text-card flex items-center justify-center transition-all duration-300 ease-in-out"
          >
            {/* Contenu */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3 text-card">{info.label}</h3>
              <p className="text-md font-light text-background">{info.value}</p>
            </div>

            {/* Animation de la carte au survol */}
            <div className="absolute inset-0 border-2 border-white opacity-30 rounded-xl transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
};
