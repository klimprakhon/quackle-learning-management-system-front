const renderAttachment = (attachment) => {
  if (!attachment) return null;

  // deal with video file
  const videoExtensions = ["mp4", "webm", "ogg"];
  const attachmentExtension = attachment.split(".").pop().toLowerCase();
  if (videoExtensions.includes(attachmentExtension)) {
    return <video controls src={attachment} className="w-full h-auto"></video>;
  }

  // deal with pdf file
  if (attachmentExtension === "pdf") {
    return (
      <iframe
        src={attachment}
        className="w-full h-[500px]"
        title="PDF Viewer"
      ></iframe>
    );
  }

  // deal with plain html tag
  return <div dangerouslySetInnerHTML={{ __html: attachment }}></div>;
};

export default renderAttachment;
