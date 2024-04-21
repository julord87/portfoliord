import SocialMediaCard from "./SocialMediaCard"


const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto mb-0">
        <section className="spikes-footer border-gray-300 lg:p-3 max-w-6xl mx-auto"></section>
        <div className="footer mx-auto max-w-6xl h-64 rounded-b-2xl mb-0">
            <div className="text-3xl p-4 pt-10">
                <SocialMediaCard />
            </div>

            <div className="max-w-6xl mx-auto pb-10">
                <p className="footer-text text-center text-neutral-400">Copyright {'>'} Julian Martinez 2024</p>
            </div>
        </div>
    </footer>

  )
}

export default Footer