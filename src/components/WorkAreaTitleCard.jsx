import { useEffect } from "react";
import { handleScroll } from "../helpers/handle-scroll-fn";

const WorkAreaTitleCard = ({ title, description }) => {
    function divideStr(str) {
        let totalLength = str.length;
        let partLength = Math.floor(totalLength / 3); // Calcular la longitud aproximada de cada parte
        let index = 0;
        let result = ['', '', '']; // Inicializar las partes

        // Iterar sobre cada parte
        for (let i = 0; i < 3; i++) {
            // Obtener la parte actual del texto
            let currentPart = str.substr(index, partLength);

            // Si es la última parte, incluir el texto restante
            if (i === 2) {
                result[i] = str.substr(index);
            } else {
                // Buscar el próximo espacio para dividir la parte
                let nextSpace = currentPart.lastIndexOf(' ');

                // Ajustar la longitud de la parte para que termine en un espacio
                if (nextSpace !== -1) {
                    result[i] = currentPart.substr(0, nextSpace);
                    index += nextSpace + 1;
                } else {
                    index += partLength;
                }
            }
        }

        return result;
    }

    const descriptionArr = divideStr(description);

    useEffect(() => {
        handleScroll('.card');
    }, []);

    return (
        <div className="card mb-5 mx-2 to-fade-in">
            <div className="p-5 px-16 lg:grid lg:grid-cols-4 items-center gap-10">
                <div className="Title-9999 col-span-1 text-6xl border-r-4 border-pink-100">
                    <p>{title}</p>
                </div>
                <div className="md:col-span-3 md:grid md:grid-cols-3 md:space-x-12 xs:grid-cols-1">
                    {descriptionArr.map((part, index) => (
                        <div key={index} className="wa-card-description col-span-1 py-3">
                            <p className={`text-slate-600 ${index === 0 ? 'first-div-style' : ''}`}>{part}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkAreaTitleCard;
