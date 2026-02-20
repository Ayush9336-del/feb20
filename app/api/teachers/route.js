import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

 export async function GET() {
  const filePath = path.join(process.cwd(), "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return NextResponse.json(data.teachers);
}

 export async function POST(req) {
  try {
    const newTeacher = await req.json();

    const filePath = path.join(process.cwd(), "data.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);

     const newId = data.teachers.length + 1;

    const teacher = {
      id: newId,
      name: newTeacher.name,
      subject: newTeacher.subject,
      experience: newTeacher.experience,
    };

    data.teachers.push(teacher);
 
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({
      message: "Teacher added successfully",
      teacher,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Error adding teacher" },
      { status: 500 }
    );
  }
}
 