"use client";

export default function FooterMap() {
  return (
    <div className="w-full h-[400px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.947242139235!2d30.9174!3d29.9754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjkuOTc1NCwgMzAuOTE3NA!5e0!3m2!1sen!2seg!4v1711833600000!5m2!1sen!2seg"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>
    </div>
  );
}
