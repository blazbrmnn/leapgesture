var mediaPatterns = {
	image: [".jpg", ".jpeg", ".png", ".gif", ".svg"],
	video: [".avi", ".mp4"],
	embed: ["youtu.be", "youtube.com"]
}

function renderAttachments (attachments, serviceName, type = 'image') {
	var patterns = mediaPatterns[type];

	if (typeof attachmentsByService[serviceName] !== 'undefined') {
		return attachmentsByService[serviceName](attachments, patterns);
	} else {
		return [];
	}
}

const attachmentsByService = {
	facebook: function (attachments, patterns) {
		var results = attachments.map(attachment => {
			if (typeof attachment.external_context !== 'undefined') {
				for (let pattern of patterns) {
					if (attachment.external_context.url.indexOf(pattern) !== -1)
						return attachment.external_context.url;
				}
			}
		});
	}
}

export { renderAttachments }