#!/bin/bash -e

	echo "Updating Git Repository Last Modified Time-stamp"

	# Obtain the Operating System
	OS=${OS:-`uname`}
	echo ${OS:-`uname`}

	# Get the last revision hash of a particular file in the git repository
	getFileLastRevision() 
	{
		git rev-list HEAD "$1" | head -n 1
	}

	# Extract the actual last modified timestamp of the file and Update the time-stamp
	updateFileTimeStamp() 
	{
		# Extract the file revision
		FILE_REVISION_HASH=`getFileLastRevision "$1"`

		# Get the File last modified time
		FILE_MODIFIED_TIME=`git show --pretty=format:%ai --abbrev-commit ${FILE_REVISION_HASH} | head -n 1`
		
		# Modify the last modified timestamp
		touch -d "${FILE_MODIFIED_TIME}" $2
	}

	# Backup and update the "Internal Field Separator" to a newline. This is so that
	# we can deal with spaces in file names in the for loop below
	IFS_BAK=$IFS
	IFS="
	"
	# Loop through and fix timestamps on all files in our checked-out repository
	for file in $(git ls-files)
	do
		updateFileTimeStamp "${file}" "${file}"
	done

	# Revert the default delimiter
	IFS=$IFS_BAK
	IFS_BAK=
